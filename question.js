// Wait until the page is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            title: "Find the Missing Number",
            topic: "arrays",
            difficulty: "easy",
            source: "LeetCode",
            link: "https://leetcode.com/problems/missing-number/"
        },
        {
            title: "Longest Substring Without Repeating Characters",
            topic: "strings",
            difficulty: "medium",
            source: "LeetCode",
            link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
        },
        {
            title: "Valid Parentheses",
            topic: "stacks",
            difficulty: "easy",
            source: "LeetCode",
            link: "https://leetcode.com/problems/valid-parentheses/"
        },
        {
            title: "Reverse a String using Stack",
            topic: "stacks",
            difficulty: "easy",
            source: "GeeksforGeeks",
            link: "https://www.geeksforgeeks.org/stack-set-3-reverse-a-string-using-stack/"
        },
        {
            title: "Check for Balanced Parentheses in an Expression",
            topic: "stacks",
            difficulty: "easy",
            source: "GeeksforGeeks",
            link: "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/"
        }
    ];

    // Get references to filter dropdowns and questions container
    const topicFilter = document.getElementById('topicFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');
    const questionsList = document.getElementById('questionsList');

    // Function to display questions
    function displayQuestions() {
        // Get selected values from filters
        const selectedTopic = topicFilter.value;
        const selectedDifficulty = difficultyFilter.value;

        // Clear previous list
        questionsList.innerHTML = '';

        // Filter questions based on selected values
        const filteredQuestions = questions.filter(q => {
            const topicMatch = selectedTopic === 'all' || q.topic === selectedTopic;
            const difficultyMatch = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
            return topicMatch && difficultyMatch;
        });

        // Display each filtered question
        if (filteredQuestions.length === 0) {
            questionsList.innerHTML = `<p>No questions found for the selected filters.</p>`;
        } else {
            filteredQuestions.forEach(q => {
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('question');

                questionDiv.innerHTML = `
                    <a href="${q.link}" target="_blank">${q.title}</a>
                    <span>(${q.source})</span>
                `;

                questionsList.appendChild(questionDiv);
            });
        }
    }

    // Attach event listeners to filters
    topicFilter.addEventListener('change', displayQuestions);
    difficultyFilter.addEventListener('change', displayQuestions);

    // Initial load
    displayQuestions();
});
