<?php
include('config.php');

// Check if image file is uploaded
if ($_FILES['file']['name']) {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["file"]["name"]);
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    // Check file size or type if necessary

    // Move uploaded file
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
        // Insert post into database
        $image_url = mysqli_real_escape_string($conn, $target_file);
        $user_id = 1; // Assuming user ID 1 for simplicity, you should handle user authentication
        $sql = "INSERT INTO posts (user_id, image_url) VALUES ('$user_id', '$image_url')";
        if ($conn->query($sql) === TRUE) {
            echo "File uploaded successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "Error uploading file";
    }
} else {
    echo "No file selected";
}

$conn->close();
?>
