import { render } from '@testing-library/react';
import { OrderDetailsProvider } from '../contexts/OrderDetails';

// ui는 렌더링 하고자하는 컴포넌트
const renderWithContext = (ui, options) =>
    render(ui, { wrapper: OrderDetailsProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };