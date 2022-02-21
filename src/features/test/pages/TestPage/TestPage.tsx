import { memo } from 'react';
import { TestButton } from '../../components/TestButton';

const TestPageComponent: React.VFC = () => (
  <div>
    <h1>This is test page</h1>
    <TestButton>Hello from test button</TestButton>
  </div>
);

export const TestPage = memo(TestPageComponent);
