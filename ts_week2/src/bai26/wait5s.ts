async function wait5s() {
  await new Promise(res => setTimeout(res, 5000));
  console.log("Cho 5 giay thanh cong");
}
wait5s();
