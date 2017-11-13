;(function() {
/**
 * clock class
 */
  class Clock {
  /**
   * determine clock part
   */
    constructor() {
      this.runnerHour = document.querySelector('.clock__hour');
      this.runnerMinute = document.querySelector('.clock__minute');
      this.runnerSecond = document.querySelector('.clock__second');
      this.clockSound = document.querySelector('#clock-ticking');

      this.degPer = {
        hour: 360 / 24,
        minute: 360 / 60,
        second: 360 / 60,
      };

      this.updateRunner = this.updateRunner.bind(this);
      this.startClock = this.startClock.bind(this);

      this.startClock();

      window.setInterval( this.startClock, 1000);
    }

    /**
   * Start clock
   */
    startClock() {
      const time = new Date();

      this.updateRunner(this.runnerHour, time.getHours(), this.degPer.hour);
      this.updateRunner(this.runnerMinute, time.getMinutes(), this.degPer.minute);
      this.updateRunner(this.runnerSecond, time.getSeconds(), this.degPer.second);
    }

    /**
     * Update runner
     * @param {Node} element
     * @param {Number} unit
     * @param {Number} degPerUnit
     */
    updateRunner(element, unit, degPerUnit) {
      const deg = degPerUnit * unit;

      if (!deg) {
        element.style.transition = '0s all';
      } else {
        element.style.transition = '';
      }

      element.style.transform = `rotate(${deg}deg)`;
      this.clockSound.play();
    }
  }

  new Clock();
})();
