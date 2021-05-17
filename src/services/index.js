const getJob = async (id) => {
  try {
    const RES = await fetch(`https://torre.co/api/opportunities/${id}`);

    const data = await RES.json();
    if (data && data.id) {
      return data;
    }
    return null;
  } catch (err) {
    throw Error("something went wrong");
  }
};

const getUser = async () => {
  try {
    const RES = await fetch(`https://bio.torre.co/api/bios/pabloacostab17`);
    const data = await RES.json();
    console.log(data, "gola");
    return data;
  } catch (err) {
    throw Error("something went wrong");
  }
};

export { getJob, getUser };
