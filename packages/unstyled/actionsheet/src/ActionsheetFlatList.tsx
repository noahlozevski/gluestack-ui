import React, { forwardRef } from 'react';

export function ActionsheetFlatList<T>(
  StyledActionsheetFlatList: React.ComponentType<T>
) {
  return forwardRef(
    ({ ...props }: { children?: React.ReactNode | string }, ref?: any) => {
      return <StyledActionsheetFlatList ref={ref} {...(props as T)} />;
    }
  );
}
