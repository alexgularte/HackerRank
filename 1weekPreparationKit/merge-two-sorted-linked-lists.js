
console.log(solution(
    {
        data: 1,
        next: {
            data: 3,
            next: {
                data: 7
            }
        }
    },
    {
        data: 1,
        next: {
            data: 2
        }
    }
));outHead

function solution(head1, head2){
    const outHead = {}
    const outTail = outHead

    if(head1.data > head2.data){
        const aux = head1
        head1 = head2
        head2 = aux
    }

    while(head1.next){
        outTail.data = head1.data

        head1 = head1.next
    }

//    outTail.data = 

    return outHead
}