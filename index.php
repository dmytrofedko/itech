<?php
    $answer = '';
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $num1 = $_POST['num1'];
        $num2 = $_POST['num2'];
        $action = $_POST['action'];
        switch ($action) {
            case '+':
                $answer = $num1 + $num2;
                break;
            case '-':
                $answer = $num1 - $num2;
                break;
            case '/':
                $answer = $num1 / $num2;
                break;
            case '*':
                $answer = $num1 * $num2;
                break;
        }

        $myfile = fopen('answers.txt', 'a');
        $what = $num1 . ' ' . $action . ' ' . $num2 . ' = ' . $answer . '<br>';
        fwrite($myfile, $what);
        fclose($myfile);
    }
?>

<p>calculator</p>
<form action="" method="post">
    <table>
        <tr>
            <td><input type="number" id="num1" name="num1"></td>
            <td>
                <input type="radio" name="action" value="+"> + <br>
                <input type="radio" name="action" value="-"> - <br>
                <input type="radio" name="action" value="/"> / <br>
                <input type="radio" name="action" value="*"> * <br>
            </td>
            <td><input type="number" id="num2" name="num2"></td>
            <td><input type="submit" value="go" name="go"></td>
        </tr>
    </table>
</form>

<p>history <br> 
    <?php 
        if(file_exists('answers.txt'))
        {
            $myfile = fopen('answers.txt', 'r');
            echo fread($myfile,filesize("answers.txt"));
            fclose($myfile);
        }
    ?>
</p>
