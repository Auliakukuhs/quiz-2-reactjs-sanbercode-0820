const balok1 = {
  p: 10,
  l: 2,
  t: 4
}

const kubus1 = {
  s: 5
}

const volBalok = (...balok1) => {
  return `Volume Balok = ${balok1[0].p*balok1[0].l*balok1[0].t}`;
}

const volKubus = (...kubus1) => {
  return `Volume Kubus = ${kubus1[0].s*kubus1[0].s*kubus1[0].s}`;
}


console.log(volBalok(balok1));
console.log(volKubus(kubus1));