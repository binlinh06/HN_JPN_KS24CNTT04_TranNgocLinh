enum weekDays {
    Monday = "Thứ Hai",
    Tuesday = "Thứ Ba",
    Wednesday = "Thứ Tư",
    Thursday = "Thứ Năm",
    Friday = "Thứ Sáu",
    Saturday = "Thứ Bảy",
    Sunday = "Chủ Nhật"
}

console.log("Các ngày trong tuần:");
for (const day in weekDays) {
  if (isNaN(Number(day))) {
    console.log(day);
  }
}
