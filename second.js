const calculate demerit points = (speed) => {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedlimit) {
        console.log("ok");
        return;
    }
}

  const demeritPoints = Math((speed - speedlimit) / kmPerPoint)

  console.log(`Points: ${demeritPoints}`);

  if (demeritPoints > 12) {
    console.log("license suspended")
  };