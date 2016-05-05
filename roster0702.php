<!--

* roster0702.php

* Roster 0702 interface 

*

* Version information e.g. Version 6

*

* Date e.g. 19/04/2016

* @author Kellie Hughes, X12388761

*

*/

-->

<?php

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="favicon.ico">

    <title>Shifts</title>

    <!-- Scripts -->
    <script src="ie-emulation-modes-warning.js"></script>
    <script src="https://cdn.firebase.com/js/client/2.2.1/firebase.js"></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>
    <script src="rosterjava.js" type="text/javascript"></script>

    <!-- Bootstrap core CSS -->
    <link href="bootstrap.min.css" rel="stylesheet">

    <!-- Link to CSS -->
    <link href="softwareproject.css" rel="stylesheet">

    <div id='cssmenu'>
<ul>
            <li class='active'>
                <a href='roster3101.php'><span>Rosters</span></a>
            </li>
            <li>
                <a href='request.php'><span>Requests</span></a>
            </li>
            <li>
                <a href='chat2.php'><span>Chat</span></a>
            </li>
            <li class='last'>
                <a href='manager.php'><span>Manager</span></a>
            </li>
            <li class='pull-right' id='logout'>
                <a href='index.php'><span>Log Out</span></a>
            </li>
        </ul>
</div>
  </head>

  <body background="dark.jpg">

  

    <div class="container">

      
        <center><img src="company.png" width="750" height="100"></center>
        <h2 class="form-signin-heading"><font color="white"><center>Roster for Week Ending <h3 id="DateEnd2"></h3></center></font></h2>
<center><div class="tg-wrap"><table class="roster">
  <tr>
    <th class="tg-jlrw">Name</th>
    <th class="tg-yw4l" id="Date23"></th>
    <th class="tg-yw4l" id="Date24"></th>
    <th class="tg-yw4l" id="Date25"></th>
    <th class="tg-yw4l" id="Date26"></th>
    <th class="tg-yw4l" id="Date27"></th>
    <th class="tg-yw4l" id="Date28"></th>
    <th class="tg-yw4l" id="Date29"></th>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp1"></td>
    <td class="tg-yw4l" id="Emp1Mon2"></td>
    <td class="tg-yw4l" id="Emp1Tue2"></td>
    <td class="tg-yw4l" id="Emp1Wed2"></td>
    <td class="tg-yw4l" id="Emp1Thur2"></td>
    <td class="tg-yw4l" id="Emp1Fri2"></td>
    <td class="tg-yw4l" id="Emp1Sat2"></td>
    <td class="tg-yw4l" id="Emp1Sun2"></td>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp2"></td>
    <td class="tg-yw4l" id="Emp2Mon2"></td>
    <td class="tg-yw4l" id="Emp2Tue2"></td>
    <td class="tg-yw4l" id="Emp2Wed2"></td>
    <td class="tg-yw4l" id="Emp2Thur2"></td>
    <td class="tg-yw4l" id="Emp2Fri2"></td>
    <td class="tg-yw4l" id="Emp2Sat2"></td>
    <td class="tg-yw4l" id="Emp2Sun2"></td>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp3"></td>
    <td class="tg-yw4l" id="Emp3Mon2"></td>
    <td class="tg-yw4l" id="Emp3Tue2"></td>
    <td class="tg-yw4l" id="Emp3Wed2"></td>
    <td class="tg-yw4l" id="Emp3Thur2"></td>
    <td class="tg-yw4l" id="Emp3Fri2"></td>
    <td class="tg-yw4l" id="Emp3Sat2"></td>
    <td class="tg-yw4l" id="Emp3Sun2"></td>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp4"></td>
    <td class="tg-yw4l" id="Emp4Mon2"></td>
    <td class="tg-yw4l" id="Emp4Tue2"></td>
    <td class="tg-yw4l" id="Emp4Wed2"></td>
    <td class="tg-yw4l" id="Emp4Thur2"></td>
    <td class="tg-yw4l" id="Emp4Fri2"></td>
    <td class="tg-yw4l" id="Emp4Sat2"></td>
    <td class="tg-yw4l" id="Emp4Sun2"></td>
  </tr>
  <tr>
    <td class="tg-baqh" id="Emp5"></td>
    <td class="tg-yw4l" id="Emp5Mon2"></td>
    <td class="tg-yw4l" id="Emp5Tue2"></td>
    <td class="tg-yw4l" id="Emp5Wed2"></td>
    <td class="tg-yw4l" id="Emp5Thur2"></td>
    <td class="tg-yw4l" id="Emp5Fri2"></td>
    <td class="tg-yw4l" id="Emp5Sat2"></td>
    <td class="tg-yw4l" id="Emp5Sun2"></td>
  </tr>
</table></div></center>

</br>

<center>
<table border="0">
<tr>
<td><form action="roster3101.php">
<input type="submit" class="rosterclicks" value="Last Week">
</form></td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td>
&nbsp
</td>
<td><form action="roster1402.php">
<input type="submit" class="rosterclicks" value="Next Week">
</form></td>
</tr>
</table>
</center>



  </body>
</html>