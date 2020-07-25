import React, { useState } from "react";
import InputRange from "react-input-range";
import debounce from "lodash.debounce";

interface Props {
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMAxPrice: React.Dispatch<React.SetStateAction<number>>;
  MinPrice: number;
  MAxPrice: number;
}
const PriceRange: React.FC<Props> = ({
  setMinPrice,
  setMAxPrice,
  MinPrice,
  MAxPrice,
}) => {
  const [minval, setminVal] = useState(MinPrice);
  const [maxval, setmaxVal] = useState(MAxPrice);

  const setSliderValue = (value: any) => {
    const minValue = parseInt(value.min);
    const mxValue = parseInt(value.max);
    setminVal(minValue);
    setmaxVal(mxValue);
  };
  const OnComplete = debounce(() => {
    setMinPrice(minval);
    setMAxPrice(maxval);
  }, 3000);
  return (
    <>
      <InputRange
        maxValue={MAxPrice}
        minValue={MinPrice}
        step={10}
        value={{ min: minval, max: maxval }}
        onChange={(value: any) => setSliderValue(value)}
        onChangeComplete={OnComplete}
      />
      
    </>
  );
};

export default PriceRange;
/**onChangeComplete: (value: number | Range): void
Every mouse / touch event can trigger multiple updates, 
therefore causing onChange callback to fire multiple times. 
On the other hand, onChangeComplete callback only gets called when the user stops dragging. */
