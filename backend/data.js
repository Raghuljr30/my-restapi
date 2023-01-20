const data={
    users:[
        {
            name:'Raina',
            password:'Raina',
            email:'raina@gmail.com',
            regNumber:'120',
            solvedQuestions:0,
        }
    ],

    questions:[
        {   
            quest:"Count Array Pairs Divisible by K",
            id:"1",
        },
        
        {
          quest:"Longest Palindromic Substring",
          id:"2",
        },
          
        {quest:"Missing Number",
        id:"3"
        },
        
    ],

    leaderboard:[
        {
            rank:'1',
            name:"Raina",
            finishtime:"0:16:23",
        },
        {
            rank:'2',
            name:"Ronaldo",
            finishtime:"0:17:23",
        },
        {
            rank:'3',
            name:"Khabib",
            finishtime:"0:18:23",
        },

    ],

    results:[
        {
            questnum:'1',
            time:'0:5:32',
            passed:'7/10',
        },
        {
            questnum:'2',
            time:'0:16:30',
            passed:'10/10',
        },
        {
            questnum:'3',
            time:'0:20:30',
            passed:'9/10',
        },
    ],

    questiondescription1:[
        {
            qnum:'1',
            questdesc :"Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) such that: nums[i] * nums[j] is divisible by k.",
            input1:"nums=[1,2,3,4,5] k=2",
            output1:"7 Pairs - (0, 1), (0, 3), (1, 2), (1, 3), (1, 4), (2, 3), and (3, 4)",
            input2:"nums = [1,2,3,4], k = 5",
            output2:"0 There does not exist any pair of indices whose corresponding product is divisible by 5.",
            constraint1: "1 nums.length 105",
            constraint2:"k>0"
        },

        

    ],
    questiondescription2:[

        {
            qnum:2,
            questdesc:"Given a string s, return the longest palindromic substring in s.",
            input1:'s ="babad" ',
            output1:"bab",
            input2:'s = "cbbd"',
            output2: "bb",
            constraint1: "1 <= s.length <= 1000",
            constraint2:"s consist of only digits and English letters."
        },

    ],

    questiondescription3:[

        {   
            qnum:3,
            questdesc:"Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
            input1:"nums = [3,0,1]",
            output1:"2",
            input2:"nums = [9,6,4,2,3,5,7,0,1]",
            output2:" 8",
            constraint1: "n == nums.length",
            constraint2:"All the numbers of nums are unique."
        },

    ],
    
     outputSuccessfull:[
        {
            op:"code compiled successfully",
        }
    ],

    outputPublicFailed:[
        {
            youroutput:"5",
            expected:"10",
        }

    ],

    outputPrivateFailed:[
        {
            totaltestcasePassed:"5/11",
        }
    ],
    
     studentEmail:[
        {
            stud:"stud1@gmail.com",
        },
        {
            stud:"stud2@gmail.com",
        },
        {
            stud:"stud3@gmail.com",
        },
    ]


   
    

}

export default data;
