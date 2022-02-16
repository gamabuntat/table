const getDataPart = <T>(data: T[], pages: number, page: number) => {
  const modulo = data.length % pages;
  const onPage = Math.floor(data.length / pages);
  const sum = Array.from({ length: page }).map(
    (_, idx) => onPage + Number(idx < modulo)
  );
  const from = sum.slice(0, -1).reduce((acc, i) => acc + i, 0);
  const to = sum.reduce((acc, i) => acc + i, 0);
  return data.slice(from, to);
};

export default getDataPart;
