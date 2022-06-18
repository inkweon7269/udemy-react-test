import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import ColorButton, {replaceCamelWithSpaces} from "./components/ColorButton";


// 강의 자료 : https://github.com/bonnie/udemy-TESTING-LIBRARY
// getByText : 인수를 정규 표현식 또는 문자열을 받는다. 인수로 전달한 값이 render()로 전달된 컴포넌트 안에 있는지 확인
// expect(linkElement).toBeInTheDocument() : 단언은 테스트 성공과 실패의 원인을 알려준다.
/*
  Jest는 전역 메서드인 expect 메서드로 시작된다.
  Jest는 인수로 전달된 값의 결과가 예측과 일치하는지 확인할 때 사용된다.
  이때 사용되는 toBeInTheDocument()와 같은 메서드를 매처(Matcher)라고 한다.

  More assertion examples
  - expect(element.textContent).toBe('hello');
  - expect(elementsArray).toHaveLength(7);

  테스트 타입
  - 유닛 테스트 : 함수나 별개의 컴포넌트 코드의 한 유닛 혹은 단위를 테스트 하는 것
  - 통합 테스트 : 여러 유닛이 함꼐 작동하는 방식을 테스트해서 유닛 간의 상호 작용을 테스트
  - 기능 테스트 : 소프트웨어의 특정 기능을 테스트 하는 것. 이 경우에는 특정 함수가 아닌 소프트웨어의 일반적인 동작 (폼에 입력을 받고 제출을 클릭하면 동작하는 것과 같은 UI 기능)을 말함
  - 인수 테스트 (End to End) : 실제 브라우저가 필요하고 애플리케이션이 연결된 서버가 필요하며 Selenium, Cypress 등을 주로 사용한다.

  TDD VS BDD
  - TDD : 사용자의 애플리케이션 사용 방식 테스트를 권장하는데 이는 행동을 테스트 하는 것이다.
  - BDD : 다양한 역할 간의 협업이 필요하다. 개발자. QA, 사업 파트너 등이 있으며, 서로 다른 그룹이 상호 작용하는 방식에 관한 프로세스도 정의되어 있음

  테스팅 라이브러리와 접근성
  - https://testing-library.com/docs/queries/about/#priority
  - https://www.w3.org/TR/wai-aria/#role_definitions
  - https://github.com/testing-library/jest-dom

  eslintrc.json 참고 자료
  - https://github.com/bonnie/bonniedotdev/blob/main/client/.eslintrc.json
 */
/*
tests('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  const linkElement = screen.getByRole('link', { name: /learn react/i });
  expect(linkElement).toBeInTheDocument();
});
*/

test('button has correct initial color', () => {
  render(<ColorButton />);
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  // Click
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<ColorButton />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('disabled button gray', () => {
  render(<ColorButton />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});
})

test('disabled button', () => {
  render(<ColorButton />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  })
})









