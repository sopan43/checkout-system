# Checkout System

This project implements a checkout system for a computer store. The system supports flexible pricing rules, including bulk discounts and multi-buy deals. The code is written in TypeScript and includes unit tests for key functionality.

## Features
- **Flexible Pricing Rules**: Easily extendable pricing rules like bulk discounts and multi-buy deals.
- **Test Coverage**: Includes unit tests for core modules and pricing rules.
- **Simple CLI Execution**: Scan items and calculate totals via the provided entry point.

---

## Getting Started

### Prerequisites
Ensure the following tools are installed on your system:
- **Node.js** (>=16.x)
- **npm** (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

---

## Running the Project

### Execute the Application
1. After building the project, run the following command to execute the application:
   ```bash
   npm start
   ```

2. The `index.ts` file contains example scenarios for testing the checkout functionality. Outputs will be logged to the console.

---

## Running Tests

1. Run all unit tests:
   ```bash
   npm test
   ```

2. Ensure that all test cases pass successfully.

---

## Project Structure
The project is organized as follows:

```
project/
├── src/
│   ├── index.ts         # Entry point for your code
│   ├── checkout.ts      # Main Checkout logic
│   ├── pricingRules/    # Pricing rules folder
│   │   ├── bulkDiscount.ts
│   │   ├── threeForTwo.ts
│   │   ├── index.ts
│   ├── products.ts      # Product catalog
│   ├── types.ts         # Shared types
├── dist/                # Compiled files go here after `tsc`
├── tests/
│   ├── checkout.test.ts # Unit tests
├── tsconfig.json
├── package.json
```

---

## Examples
Here are some example scenarios that you can try:

### Scenario 1:
**Input SKUs**: `atv`, `atv`, `atv`, `vga`

**Expected Total**: `$249.00`

### Scenario 2:
**Input SKUs**: `atv`, `ipd`, `ipd`, `atv`, `ipd`, `ipd`, `ipd`

**Expected Total**: `$2718.95`

You can modify the `index.ts` file to test additional scenarios.

---

## Extending the System
To add a new pricing rule:
1. Create a new module in the `src/pricingRules/` directory.
2. Implement the rule logic and export it as a function.
3. Add the new rule to the `src/pricingRules/index.ts` file.

---

## License
This project is licensed under the MIT License.

