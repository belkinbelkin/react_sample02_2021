import { render, screen } from '@testing-library/react';
import {getUsers} from './services/Users.service';
import Header from './components/header/Header';
const assert = require('assert');


/**
 * Checking if html is rendered
 */

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Back office/i);
  expect(linkElement).toBeInTheDocument();
});

/**
 * Checking if the backend service works fine and returns data
 */

describe('Backend', function() {
  describe('is returning data', function() {
    it('should not be null', async () => {
      const response = await getUsers(0);
      assert.notStrictEqual(response.data.data, null);

    });
  });
  describe('is running', function() {
    it('should return 10 entries', async () => {
      const response = await getUsers();
      assert.strictEqual(response.data.data.length, 10);
    });
  });
});
