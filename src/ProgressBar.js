import React, {Component} from 'react';
import {View} from 'react-native';


class ProgressBar extends Component {
  state = {
    Bist_pang: [],
    percentage: 0,
  };

  componentDidMount() {
    const Bist_pang = [];
    for (let i = 0; i < 100; i++) {
      Bist_pang.push(i);
    }
    this.setState({Bist_pang});
  }

  getDefaultValue = (value, defaultValue) => {
    return value ? value : defaultValue;
  };

  render() {
    const {Bist_pang} = this.state;

    const {
      isRtl,
      percentage,
      splited,
      compeletedColor,
      inCompeletedColor,
      size
    } = this.props;
    const circle_width = this.getDefaultValue(size, 200);
    return (
      <View
        style={{
          width: circle_width,
          flexDirection: isRtl ? "row-reverse" : 'row',
          justifyContent: 'space-between',
          borderRadius: 10,
        }}>
        {Bist_pang.map(item => {
          return (
            <View
              style={{
                width: splited ? circle_width / 200 : circle_width / 100,
                height: 10,
                backgroundColor:
                  item < percentage
                    ? this.getDefaultValue(compeletedColor, '#39bc65')
                    : this.getDefaultValue(inCompeletedColor, '#C1C1C1'),
              }}
            />
          );
        })}
      </View>
    );
  }
}

export {ProgressBar};
