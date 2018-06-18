export default function forecastBuilder(res, iconJSON) {
    const days = [
      {
        lowTemp: null,
        highTemp: null,
        rainChance: null,
        icon: null
      },
      {
        lowTemp: null,
        highTemp: null,
        rainChance: null,
        icon: null
      },
      {
        lowTemp: null,
        highTemp: null,
        rainChance: null,
        icon: null
      },
      {
        lowTemp: null,
        highTemp: null,
        rainChance: null,
        icon: null
      },
      {
        lowTemp: null,
        highTemp: null,
        rainChance: null,
        icon: null
      }
    ];

    let count = 0;

    for (let i = 0; i < days.length; i++) {
      let temperatureLow = 9999;
      let temperatureHigh = -9999;
      let chancerain = 0;

      for (let j = 0; j < 8; j++) {

        if (typeof res.list[count].rain !== 'undefined') {
          if (chancerain < res.list[count].rain['3h']) {
            chancerain = res.list[count].rain['3h']
          };
        }

        if (temperatureLow > res.list[count].main.temp) {
          temperatureLow = res.list[count].main.temp
        }

        if (temperatureHigh < res.list[count].main.temp) {
          temperatureHigh = res.list[count].main.temp
        }
        count++;
      }
      days[i].lowTemp = temperatureLow;
      days[i].highTemp = temperatureHigh;
      days[i].rainChance = (chancerain / 8);
      days[i].icon =`wi wi-day-${iconJSON[res.list[4 + (8 * i)].weather[0].id].icon}`;
    }

    return days;
  }
