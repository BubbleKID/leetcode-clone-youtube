import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeHashingApproach = `function hashingApproach(s,k){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerHashingApproach = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const s = [
			"amazon",
			"abaaba"
		];

		const k = [3, 2];
		const answers = [
			1,
			2
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < s.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(s[i], k[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("hashingApproach handler function error");
		throw new Error(error);
	}
};

export const hashingApproach: Problem = {
	id: "hashing-approach",
	title: "2. Hashing Approach",
	problemStatement: `<p class='mt-3'>
            Amazon is working on a new hashing approach that takes in the originastring and a seed number.
        </p>
        <p class='mt-3'>
            Engineers decided that the seed can be generated from the same inputstring by counting the number of times a reverse of a substring of lengthk makes the new string lexicographically smaller. You are deployed withthe task of developing a service that takes in a string s and an integerk, and returns the number of ways to reverse any substring of length ksuch that the resulting string is lexicographically smaller than the originastring
        </p>
        <p class='mt-3'>You can return the answer in any order.</p>
        <br/>
        <p><strong>Notes:</strong></p>
        <li class='mt-2'>
            A substring is a contiguous sequence of characters within a string. Forexample, the string zon" 
            is a substring of "amazon", "zone", etc. but is nota substring of"zoin" "zozo", etc.
        </li>
        <li class='mt-2'>
            A string a is lexicographically smaller than string b if ali7 < bl at the firstindex where a and b differ. 
            For example, "amazon" is lexicographicallysmaller than "amozan".
        </li>
        Example
        s ="amazon"
        k=3
        Consider all substrings of length k = 3. These are the possible ways toperform the given operation are:
    `,
	examples: [
		{
			id: 1,
			inputText: "s =\"amazon\", k=3",
			outputText: "1",
		},
        {
			id: 2,
			inputText: "s =\"ababa\", k=2",
			outputText: "2",
		}
	],
	constraints: `<li class='mt-2'>
            <code>2 ≤ s.length ≤ 10^6</code>
        </li> 
        <li class='mt-2'>
            <code>1 ≤ k ≤ min(|s|, 20)</code>
        </li> 
    `,
	handlerFunction: handlerHashingApproach,
	starterCode: starterCodeHashingApproach,
	order: 2,
	starterFunctionName: "function hashingApproach(",
};
