document.getElementById('account-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const profileUrl = document.getElementById('profile-url').value;

    // Simulate an API call to check if the account is fake
    const result = await checkFakeAccount(username, profileUrl);
    
    // Display the result
    document.getElementById('result').innerText = result;
});

async function checkFakeAccount(username, profileUrl) {
    // Simulated logic for detecting fake accounts
    // In a real application, this would be an API call to your backend
    // For demonstration purposes, we'll use simple conditions

    if (username.includes("fake") || username.length < 5) {
        return "This account is likely fake.";
    }

    if (!profileUrl.startsWith("http")) {
        return "Invalid profile URL.";
    }

    // Simulate further checks (like API response)
    return "This account appears to be legitimate.";
}
