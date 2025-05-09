// Copyright 2023 The Perses Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { DurationString, TimeRangeValue } from '@perses-dev/core';
import React, { ReactElement } from 'react';
import { TimeRangeProvider } from './TimeRangeProvider';
import { useSetRefreshIntervalParams, useTimeRangeParams } from './query-params';

export interface TimeRangeFromQueryProps {
  initialTimeRange: TimeRangeValue;
  initialRefreshInterval?: DurationString;
  children?: React.ReactNode;
}

export function TimeRangeProviderWithQueryParams(props: TimeRangeFromQueryProps): ReactElement {
  const { initialTimeRange, initialRefreshInterval, children } = props;

  const { timeRange, setTimeRange } = useTimeRangeParams(initialTimeRange);
  const { refreshInterval, setRefreshInterval } = useSetRefreshIntervalParams(initialRefreshInterval);

  return (
    <TimeRangeProvider
      timeRange={timeRange}
      refreshInterval={refreshInterval}
      setTimeRange={setTimeRange}
      setRefreshInterval={setRefreshInterval}
    >
      {children}
    </TimeRangeProvider>
  );
}
