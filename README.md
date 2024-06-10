# CareerOS Frontend Assignment

**By Philipp Kundratitz**

---

## Start app

```bash
npm run dev
```

Make sure the dev server is running on port `5173` (should be the default)

---

## Additional comments

- I replaced the `example.com/profile_image` urls with a static url pointing to a placeholder image in the public folder.
- The main logic for dynamically rendering quest cards is handled inside of a mapping in `constants/mappings.js`. By following this approach, it is easily possible to add additional types of quests without needing to develop a new component.
- Link targets or button actions could also easily be intergated into the individual component cards through the mapping, making it easy to add interactivity to the component.
