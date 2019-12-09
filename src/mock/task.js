import {COLORS} from '../const.js';

const MAX_DATE_GAP = 7;

const DescriptionItems = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];

const DefaultRepeatingDays = {
  'mo': false,
  'tu': false,
  'we': false,
  'th': false,
  'fr': false,
  'sa': false,
  'su': false,
};

const Tags = [`homework`, `theory`, `practice`, `intensive`, `keks`];

const getBoolean = () => {
  return Math.random() > 0.5;
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = getBoolean() ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, MAX_DATE_GAP);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

const generateRepeatingDays = () => {
  return Object.assign({}, DefaultRepeatingDays, {
    'mo': getBoolean(),
  });
};

const generateTags = (tags) => {
  return tags
    .filter(() => getBoolean())
    .slice(0, 3);
};

const generateTask = () => {
  const dueDate = getBoolean() ? null : getRandomDate();

  return {
    description: getRandomArrayItem(DescriptionItems),
    dueDate,
    repeatingDays: dueDate ? DefaultRepeatingDays : generateRepeatingDays(),
    tags: new Set(generateTags(Tags)),
    color: getRandomArrayItem(COLORS),
    isFavorite: getBoolean(),
    isArchive: getBoolean(),
  };
};

const generateTasks = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTask);
};

export {generateTask, generateTasks};
