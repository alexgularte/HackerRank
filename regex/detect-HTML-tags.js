console.log(solution("<p><a href=\"http://www.quackit.com/html/tutorial/html_links.cfm\">Example Link</a></p><div class=\"more-info\"><a href=\"http://www.quackit.com/html/examples/html_links_examples.cfm\">More Link Examples...</a></div>"))

function solution(input){    
    console.log(uniq(input.match(/(?<=<)\s*\w+\b/g).sort()).join(';'));
}

function uniq(arr){
    return arr.filter((v, idx) => idx>0?v !== arr[idx-1]:true)
}
