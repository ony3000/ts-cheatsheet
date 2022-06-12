# Extending Types

타입을 확장한다는 것은, 기존 타입보다 더 구체적인 제약조건을 갖는 새 타입을 정의하는 것이다.<br>
제약조건이 늘어나면 그것을 만족시키는 값의 범위는 줄어들기 때문에, *확장(extend)* 된 타입은 더 *좁은(narrow)* 타입이 된다.

```typescript
// 표현할 수 있는 값은 7가지밖에 안 되지만, 제약조건이 더 구체적이기 때문에 string 타입을 *확장* 한 것으로 간주된다.
type DayOfTheWeek = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';

let generalText: string = 'Sun';

let specificText: DayOfTheWeek = 'Sun';

// OK - 좁은 타입의 값을 넓은 타입 변수에 할당하는 것은 문제되지 않는다.
generalText = specificText;

// Error - 제약조건이 적은 타입의 값을 제약조건이 많은 타입 변수에 할당하는 것은 문제가 된다.
specificText = generalText;
```

```typescript
// 인간
interface Human {
  name: string;
  gender: string;
}

// 대학생 (Human 타입보다 더 구체적인 제약조건을 가진다.)
interface Undergraduate extends Human {
  major: string[];
  grade: number;
}

const person1: Human = {
  name: 'John Doe',
  gender: 'male',
};

const person2: Undergraduate = {
  name: 'Jane Roe',
  gender: 'female',
  major: [
    'Mathematics',
  ],
  grade: 3,
};

// OK - 모든 대학생은 인간이다.
const person3: Human = person2;

// Error - 모든 인간이 대학생인 것은 아니다.
const person4: Undergraduate = person1;
```
