function getEle(id) {
  return document.getElementById(id);
}

// get grade k1
document.getElementById("btnKhoi1").addEventListener("click", () => {
  const toan = getEle("inpToan").value * 1;
  const ly = getEle("inpLy").value * 1;
  const hoa = getEle("inpHoa").value * 1;
  console.log(toan, ly, hoa);
  const dtbK1 = dtb(toan, ly, hoa);
  getEle("tbKhoi1").innerHTML = "Điểm trung bình khối 1 là: " + dtbK1;
});

// get grade k2
document.getElementById("btnKhoi2").addEventListener("click", () => {
  const van = getEle("inpVan").value * 1;
  const su = getEle("inpSu").value * 1;
  const dia = getEle("inpDia").value * 1;
  const anh = getEle("inpEnglish").value * 1;
  console.log(van, su, dia, anh);
  const dtbK2 = dtb(van, su, dia, anh);
  getEle("tbKhoi2").innerHTML = "Điểm trung bình khối 2 là: " + dtbK2;
});

// phuong thuc tinh dtb
const dtb = (...grade) => {
  let nums = 0;
  const totalGrade = grade.reduce((result, grade) => {
    nums += 1;
    return result + grade;
  }, 0);

  return totalGrade / nums;
};
