import { useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { QueryFunction, QueryKey, useQuery } from '@tanstack/react-query';

import { apiLegoClient } from '@/networking/apiClient';
import { PaginatedResponse } from '@/networking/genericTypes';

import { Minifig } from '@/types/minifigs';

type Minifigs = PaginatedResponse<Minifig[]>;

const NUMBER_OF_RANDOM_MINIFIGS = 5;

const getRandomPageNumber = (max: number) => {
  return Math.floor(Math.random() * max) + 1;
};

const geMinifigs: QueryFunction<
  AxiosResponse<Minifigs, any>,
  QueryKey,
  any
> = async ({ queryKey }) => {
  const [_, page] = queryKey;
  return await apiLegoClient.get<Minifigs>(
    `minifigs/?page=${page}&page_size=${NUMBER_OF_RANDOM_MINIFIGS}&search=harry%20potter`,
  );
};

export const useGetMinifigs = () => {
  const [page, setPage] = useState(1);
  const [areResultsRandom, setAreResultsRandom] = useState(false);

  const { data, isLoading } = useQuery<AxiosResponse<Minifigs>, AxiosError>({
    queryKey: ['minifigs', page],
    queryFn: geMinifigs,
  });

  const totalMinifigsCount = data?.data.count;

  if (totalMinifigsCount && !areResultsRandom) {
    // we are taking only pages that have 5 figures
    // if last page has less - we will omit it
    const pageCount = Math.floor(
      totalMinifigsCount / NUMBER_OF_RANDOM_MINIFIGS,
    );
    const randomPage = getRandomPageNumber(pageCount);
    setAreResultsRandom(true);
    setPage(randomPage);
  }

  const isLoadingRandomMinifigs = isLoading && !areResultsRandom;

  return {
    minifigs: data?.data.results,
    isLoading: isLoadingRandomMinifigs,
  };
};
