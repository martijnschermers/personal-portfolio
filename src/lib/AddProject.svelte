<script>
  import { collection, addDoc } from "firebase/firestore";
  import { database } from "./firebase";

  let title;
  let description;
  let link;
  let type;

  let badgeName;
  let badgeLink;
  let badgeColor;
  let badges = [];

  async function addProject() {
    try {
      const docRef = await addDoc(collection(database, "projects"), {
        title: title,
        description: description,
        link: link,
        type: type,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
</script>

<form on:submit|preventDefault={addProject}>
  <input type="text" bind:value={title} />
  <input type="text" bind:value={description} />
  <input type="text" bind:value={link} />

  <select bind:value={type}>
    <option value="website">Website</option>
    <option value="mobile-app">Mobile App</option>
    <option value="software">Software</option>
  </select>

  <!-- <input type="text" bind:value={badgeName} />
  <input type="text" bind:value={badgeLink} />
  <input type="color" bind:value={badgeColor} /> -->

  <button type="submit">Add Project</button>
</form>
