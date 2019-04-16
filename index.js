function buildHistogram(arr) {
  let histogram = new Map();

  arr.forEach(n => {
    histogram.get(n) ? histogram.set(n, histogram.get(n) + 1) : histogram.set(n, 1);
  });

  return histogram;
}

function canBuildNote(arr, note) {
  const magazineHistogram = buildHistogram(arr);
  const noteHistogram = buildHistogram(note.split(''));

  for (let [char, count] of noteHistogram) {
    const magCharCount = magazineHistogram.get(char) || 0;
    if (count > magCharCount) { return false; }
  }

  return true;
}

function binaryMatch(mag){

}

function canBuildNote(mag,note){
  let hist = buildHistogram(mag)
  for (let el of note){
    if (hist[el] > 0){
      hist[el]-=1
    }
    else{
      return false
    }
  }
  return true
}

function buildHistogram(mag){
  let hash={}
  for (let el of mag){
    if (hash[el]){
      hash[el]+=1
    }
    else{
      hash[el]=1
    }
  }
  return hash
}