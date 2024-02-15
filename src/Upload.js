function Upload() {
  return (
    <div>
      <form>
        <input id="title" type="text" placeholder="Book Title"></input>
        <input id="author" type="text" placeholder="Author"></input>
        <input id="book" type="file"></input>

        <button type="submit"></button>
      </form>
    </div>
  );
}

export default Upload;
