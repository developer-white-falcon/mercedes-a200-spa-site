const featureLinks = document.querySelectorAll('.feature__link');
const featureLists = document.querySelectorAll('.feature-sub');

featureLinks.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (featureLinks[index].classList.contains('feature__link_active')) {
      featureLinks[index].classList.remove('feature__link_active');
      featureLists[index].classList.add('hidden');
    } else {
      featureLinks.forEach((item) =>
        item.classList.remove('feature__link_active')
      );
      featureLists.forEach((listItem) => listItem.classList.add('hidden'));

      item.classList.add('feature__link_active');
      featureLists[index].classList.remove('hidden');
    }
  });
});
