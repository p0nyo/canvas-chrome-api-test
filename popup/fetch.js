(async () => {
  const courseIdMatch = window.location.pathname.match(/\/courses\/(\d+)/);
  const courseId = courseIdMatch ? courseIdMatch[1] : null;

  if (!courseId) {
    return { error: 'Not on a course page' };
  }

  // const response = await fetch(`/api/v1/courses/${courseId}/modules/376103/items?include[]=content_details`);
  const response = await fetch(`/api/v1/courses/${courseId}/modules`);
  if (!response.ok) return { error: 'Failed to fetch modules' };

  const modules = await response.json();
  console.log(modules);
  return modules.map(({ name }) => ({ name }));
})();
