const pagination = (query) => {
  const maxLimit = 5;
  const defaultOffset = 0;
  const paginationObject =
    query.offset && query.limit
      ? query.limit <= maxLimit
        ? {
            offset: Number(query.offset) * maxLimit,
            limit: Number(query.limit),
          }
        : {
            offset: Number(query.offset) * maxLimit,
            limit: maxLimit,
          }
      : { offset: defaultOffset * maxLimit, limit: maxLimit };
  return paginationObject;
};

module.exports = pagination;
