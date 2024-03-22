"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

interface Props {
  totalPages: number;
  className?: string;
}

export function QueryPagination({ totalPages, className }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const createPageURL = (pageNubmer: string | number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNubmer.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination className={className}>
      <PaginationContent>
        {prevPage >= 1 ? (
          <PaginationItem>
            <PaginationPrevious
              href={createPageURL(prevPage)}
            ></PaginationPrevious>
          </PaginationItem>
        ) : null}

        {Array(totalPages)
          .fill("")
          .map((_, index) => (
            <PaginationItem
              className="hidden sm:inline-block"
              key={`page-button-${index}`}
            >
              <PaginationLink
                href={createPageURL(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

        {nextPage <= totalPages ? (
          <PaginationItem>
            <PaginationNext href={createPageURL(nextPage)}></PaginationNext>
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
}
