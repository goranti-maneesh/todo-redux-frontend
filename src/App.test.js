import { render, screen } from '@testing-library/react';
import Todos from './components/Todos';

test('Test the Add Todos button.', () => {
  render(<Todos/>);
  const addTodosBtnEle = screen.getAllByRole('button', {name: 'Add Todos'})
  expect(addTodosBtnEle).toBeInTheDocument();
})