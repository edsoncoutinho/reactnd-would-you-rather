export function formatQuestion(question, author) {
  const { id, timestamp, optionOne, optionTwo } = question;
  const { name, avatarURL } = author;

  const textOne = optionOne.text.split(' ');
  const textTwo = optionTwo.text.split(' ');

  const equals = textOne.filter(value => textTwo.includes(value));
  const text = (equals.length) ? equals.slice(0, 2).join(' ') : null;

  const votesNumber = optionOne.votes.length + optionTwo.votes.length;
  const optionOnePercent = ((optionOne.votes.length * 100) / votesNumber);
  const optionTwoPercent = ((optionTwo.votes.length * 100) / votesNumber);

  return {
    name,
    avatar: avatarURL,
    id,
    text,
    optionOne,
    optionTwo,
    optionOnePercent,
    optionTwoPercent,
    votesNumber,
    timestamp
  };
};