import matter from 'gray-matter';

const projectFiles = import.meta.glob('./projects/*.md', { eager: true });

export const projects = Object.keys(projectFiles).map((fileName) => {
  const file = projectFiles[fileName];
  const { data, content } = matter(file.default);
  return {
    ...data,
    fullDescription: content
  };
});