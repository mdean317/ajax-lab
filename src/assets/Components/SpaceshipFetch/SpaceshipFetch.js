const get = async (query) => {
    try {

      const res = await fetch(query);
      const data = await res.json();

      return data;
      
    } catch (err) {
      console.log(err);
    }
};

export { get };