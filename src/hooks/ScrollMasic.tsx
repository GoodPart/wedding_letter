import bezier from "bezier-easing";

type GetPercent = {
  start: number;
  end: number;
  value: number;
  smtValue: number;
};

// const easing = bezier(0, .68, 1, 0.68); // 사용될 이징 함수
const easing = bezier(0, 0.68, 1, 0.86); // 사용될 이징 함수

export const getPercentSymmetry = ({
  start,
  end,
  value,
  smtValue,
}: GetPercent): any => {
  let betweenGap = end - start; // 처음과 끝의 수의 거리를 구한다.
  let newInsertValue = Math.abs(start - value); // start와 들어온 값을 감가한다.

  let calc = Math.abs(newInsertValue / betweenGap); // 새로운 값과 두 수 사이의 거리를 나눈다. (들어온 값에 대한 퍼센트 계산)
  if (Number(calc) >= smtValue) {
    return easing((calc = 1 - newInsertValue / betweenGap));
  }
  return easing(calc);
};

export const getPercentLinear = ({ start, end, value }: any): any => {
  let betweenGap = end - start;
  let newInsertValue = Math.abs(start - value);

  let calc = Math.abs(newInsertValue / betweenGap);

  return easing(calc);
};

export const handleScrolls = (...refs: any): any => {
  const { scrollY } = window;
  // console.log(refs)
  const divs = refs[0];
  const options = refs[1];

  Object.values(divs).map((ref: any, index) => {
    const current = ref.current;

    if (scrollY >= options[index].start && scrollY <= options[index].end) {
      let getOpacity = getPercentSymmetry({
        start: options[index].start,
        end: options[index].end,
        value: scrollY,
        smtValue: 0.9,
      });

      let getY = getPercentLinear({
        start: options[index].start,
        end: options[index].end,
        value: scrollY,
      });

      let getTranslateY = (value: any) => {
        let _start = options[index].tStart;
        let _end = options[index].tEnd;

        let merge = Math.abs(_end) + Math.abs(_start);
        let newInsert = value * merge;
        return _start - newInsert;
      };
      // console.log(ref, getY)

      current?.classList.add("enabled");
      current?.classList.remove("disabled");
      current
        ? (current.style.transform = `translateY(${getTranslateY(getY)}px)`)
        : null;
      current
        ? (current.style.opacity = getOpacity * 1.8 >= 1 ? 1 : getOpacity * 1.8)
        : null;
    } else {
      current?.classList.remove("enabled");
      current?.classList.add("disabled");
      current ? (current.style.opacity = 0) : null;
    }
  });

  // return console.log(refs)
};
