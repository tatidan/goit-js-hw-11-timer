import './sass/main.scss';

class CountdownTimer {
  constructor({ onTick }) {
    this.onTick = onTick;
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const targetDate = new Date('Jul 17, 2021');
      const time = targetDate - currentTime;
      const timeComponents = this.getTimeComponents(time);
      this.onTick(timeComponents);
    }, 1000);
  }

  pad(value) {
  return String(value).padStart(2, '0');
}

  getTimeComponents(time) {
  const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}
}

const countdownTimer = new CountdownTimer({
  onTick: updateTimerFace,
});
countdownTimer.start();


const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),        
}

function updateTimerFace({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

// не поняла, как это использовать:
//  new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
