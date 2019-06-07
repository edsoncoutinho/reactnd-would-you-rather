export function formatQuestion (question, author) {
  const { id,  timestamp, optionOne, optionTwo } = question
  const { name, avatarURL } = author

  const textOne = optionOne.text.split(' ');
  const textTwo = optionTwo.text.split(' ');

  const equals = textOne.filter(value => textTwo.includes(value));
  const text = (equals.length) ? equals.slice(0, 2).join(' ') : null;

  return {
    name,
    avatar: avatarURL,
    id,
    text,
    optionOne,
    optionTwo,
    timestamp
  }
}