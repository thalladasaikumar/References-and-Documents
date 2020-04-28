# Between date range
dates = []
from datetime import timedelta, date
def daterange(date1, date2):
    for n in range(int ((date2 - date1).days)+1):
        yield date1 + timedelta(n)

start_dt = date(2020, 1, 24)
end_dt = date(2020, 4, 26)
for dt in daterange(start_dt, end_dt):
    dates.append('{d.year}/{d.month}/{d.day}'.format(d=dt))

print(dates)

#-------------------------------------------------------------------------
