function dateDifference(start, end) {

    // Copy date objects so don't modify originals
    
    var s = new Date(start);
    var e = new Date(end);
    
      var addOneMoreDay = 0;
      if( s.getDay() == 0 || s.getDay() == 6 ) {
        addOneMoreDay = 1;
    }
    
    // Set time to midday to avoid dalight saving and browser quirks
    s.setHours(12,0,0,0);
    e.setHours(12,0,0,0);
  
    // Get the difference in whole days
    var totalDays = Math.round((e - s) / 8.64e7);
  
    // Get the difference in whole weeks
    var wholeWeeks = totalDays / 7 | 0;
  
    // Estimate business days as number of whole weeks * 5
    var days = wholeWeeks * 5;
  
    // If not even number of weeks, calc remaining weekend days
    if (totalDays % 7) {
      s.setDate(s.getDate() + wholeWeeks * 7);
  
      while (s < e) {
        s.setDate(s.getDate() + 1);
  
        // If day isn't a Sunday or Saturday, add to business days
        if (s.getDay() != 0 && s.getDay() != 6) {
          ++days;
        }
        //s.setDate(s.getDate() + 1);
      }
    }
    var weekEndDays = totalDays - days + addOneMoreDay;
    return weekEndDays;
  }
  
  var date1 = "2023-09-28";
  var date2 = "2023-10-10";
  console.log(dateDifference( date1, date2));