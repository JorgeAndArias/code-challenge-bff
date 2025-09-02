# Computer Store - Checkout System

A simple checkout system with support for special pricing rules like Apple TV 3-for-2 and Super iPad bulk discounts.

## Requirements

- Node.js >= 20.0.0
- TypeScript >= 5.8.3
- Jest >= 30.0.0

## Installation

- Clone the repository and checkout the branch with the solution:

  ```bash
  git clone https://github.com/JorgeAndArias/code-challenge-bff.git
  cd code-challenge-bff
  git checkout solution
  ```

- Install dependencies:

  ```bash
  npm install
  ```

## Running Tests

To run all tests:

```bash
npm test
```

## Project Structure

- `src/models/`: Contains the Checkout class and pricing rules.
- `src/utils/`: Helper functions like priceDollars and formatting.
- `src/tests/`: Unit tests for the checkout system.
- `src/products.ts`: Product definitions.
- `src/index.ts`: Example usage of the checkout system.

## Code Challenge

Zeller is starting a computer store. You have been engaged to build the checkout system. We will start with the following products in our catalogue

| SKU |    Name     |    Price |
| --- | :---------: | -------: |
| ipd | Super iPad  |  $549.99 |
| mbp | MacBook Pro | $1399.99 |
| atv |  Apple TV   |  $109.50 |
| vga | VGA adapter |   $30.00 |

As we're launching our new computer store, we would like to have a few opening day specials.

- we're going to have a 3 for 2 deal on Apple TVs. For example, if you buy 3 Apple TVs, you will pay the price of 2 only
- the brand new Super iPad will have a bulk discounted applied, where the price will drop to $499.99 each, if someone buys more than 4

As our Sales manager is quite indecisive, we want the pricing rules to be as flexible as possible as they can change in the future with little notice.

Our checkout system can scan items in any order.

The interface to our checkout looks like this (shown in typescript):

```typescript
const co = new Checkout(pricingRules);
co.scan(item1);
co.scan(item2);
co.total();
```

Your task is to implement a checkout system that fulfils the requirements described above.

## Example scenarios

SKUs Scanned: atv, atv, atv, vga
Total expected: $249.00

SKUs Scanned: atv, ipd, ipd, atv, ipd, ipd, ipd
Total expected: $2718.95

Notes on implementation:

- use **Typescript**
- don't build guis etc, we're more interested in your approach to solving the given task, not how shiny it looks
- don't worry about making a command line interface to the application
- don't use any frameworks
- do include unit tests

When you've finished, send through the link to your github-repo.
