import React, { useMemo } from "react";
import {
  VariableSizeGrid as Grid,
  GridChildComponentProps,
} from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import { chunks } from "@utils";

interface IProps<T> {
  data: T[];
  children: (props: GridChildComponentProps<any>) => any;
  columnCount: number;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  rowHeight?: number;
}

export const VirtualizedGrid = <T,>(props: IProps<T>) => {
  const { data, children, columnCount, hasNextPage, rowHeight } = props;

  const gridData: any[] = useMemo(
    () => [...chunks(data, columnCount)],
    [data, columnCount]
  );

  const itemCount = hasNextPage ? gridData.length + 1 : gridData.length;

  const itemData = useMemo(
    () => ({
      allData: gridData,
      columnCount,
    }),
    [gridData, columnCount]
  );

  return (
    <>
      <InfiniteLoader
        isItemLoaded={() => true}
        loadMoreItems={() => {}}
        itemCount={itemCount}
      >
        {({ ref }) => (
          <AutoSizer ref={ref}>
            {({ height, width }) => (
              <Grid
                useIsScrolling
                height={height}
                columnCount={columnCount}
                rowCount={gridData.length}
                columnWidth={() => width / columnCount - 10}
                rowHeight={() => rowHeight || 500}
                width={width}
                itemData={itemData}
              >
                {(props) => children(props)}
              </Grid>
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    </>
  );
};
