const getProtocolData = async (protocol: string) => {
  const data = await import(`@data/protocols/${protocol}`).catch((err) => {
    console.error(err);
  });

  return data.default;
};

export { getProtocolData };
