import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import * as isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import * as isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

@Injectable()
export class DateUtils {
  stringToDate(date: string): Date {
    return dayjs(date).toDate();
  }

  getDateDayOfTheWeek(date: Date) {
    return dayjs(date).day();
  }

  private getDateWithTime(time: string): dayjs.Dayjs {
    return dayjs().set('hour', Number(time.split(':')[0])).set('minute', Number(time.split(':')[1]));
  }

  checkIfTimeIsWithinTimeRange(time: string, startTime: string, endTime: string): boolean {
    const dateWithTime = this.getDateWithTime(time);
    const dateWithStartTime = this.getDateWithTime(startTime);
    const dateWithEndTime = this.getDateWithTime(endTime);

    return dayjs(dateWithTime).isSameOrAfter(dateWithStartTime, 'minutes') &&
      dayjs(dateWithTime).isSameOrBefore(dateWithEndTime, 'minutes');
  }
}
