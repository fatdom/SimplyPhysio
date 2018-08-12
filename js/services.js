var title = [];
var description = [];

title[0] = "";
description[0] = "";

title[1] = "Clinical Pilates";
description[1] = "<p>Clinical Pilates is the use of Pilates exercise that are prescribed by trained physiotherapists to improve core stability, strength, posture, balance and control; thus, promote overall well-being. It is exercises on reformers, trap tables and other specialised equipment used to treat specific injuries, especially low back pain and instability of the spine. It is an excellent way to train your core, get stronger and prepare for return from injury. Clinical Pilates is often covered by insurance when used by your physiotherapist.</p><p>Pilates is an excellent treatment modality for injury rehabilitation. The teaching effects of muscle control, core stability, strength and flexibility are excellent for injury rehabilitation and prevention.</p>";

title[2] = "PiezoWave";
description[2] = "";

title[3] = "Soft Tissue Massage and Myofascial Release";
description[3] = "";

title[4] = "Acupuncture";
description[4] = "<p>Acupuncture has been used for centuries in Chinese Medicine to improve the flow of “qi” or energy. It is the use of needles inserted at various points in the body and has been shown to be beneficial for pain relief as well as improving muscle tightness.</p>";

title[5] = "Electrotherapeutic Modalities";
description[5] = "";

title[6] = "Joint Mobilization and Manipulation";
description[6] = "";

title[7] = "Post-stroke Rehabilitation";
description[7] = "<p>Damage to your brain and/or spinal cord (from stroke, neuromuscular disorders or trauma) can result in loss of movement and sensation, uncoordinated movement, weak and floppy muscles, spasm and tremor. Management and rehabilitation to improve symptoms such as, difficulties with loss of balance, loss of hand and arm, or leg and foot function, walking, spasticity and pain. A comprehensive assessment establishes individual needs and recommendations for the future treatment. Following the initial assessment we can also advise whether there is a need to seek further assessments such as occupational therapy (available on-site at our Northampton Clinic) or speech therapies. </p><p>Home visitation may also be arranged, please ask for details.</p>";

title[8] = "DIGIT Traction System";
description[8] = "";

title[9] = "Shockwave Therapy";
description[9] = "<p>Extracorporeal Shockwave Therapy (ESWT) is a non-invasive procedure for the treatment of acute and chronic pain of the musculoskeletal system. Acoustic shockwaves stimulate angiogenesis (new blood vessels) and neurogenesis (new nerve cells). The cells undergo microtrauma which promotes the inflammatory and catabolic processes that are associated with removing damaged matrix constituents and stimulates wound healing mechanisms.  Shockwave technology is also a valuable diagnostic tool for the precise localization myofascial trigger points.</p>"

title[10] = "Postural and Ergonomics Education";
description[10] = "<p>Good posture helps reduce neck and back pain. For example, with the convenience of smart phones, many spend hours carrying their heads forward to view the images on screen. Do you know the more your head sticks forward, the more stress it places on your spine? It easily causes headaches, neck pain, neck sprains, vertigo, and vertiligo. When visiting your physiotherapist we will also assess whether there are postural issues contributing to your problem.</p><p>When sitting is a major part of your day, choosing the right ergonomic chair can prevent back and neck problems and even promote good posture.</p>";

title[11] = "Gait Analysis";
description[11] = "";

title[12] = "Therapeutic and Correctional Exercises";
description[12] = "<p>Personalized exercise program prescribed for a sports injury, recovery plan, or to prevent future pains and injuries. Conditioning and strengthening the body is essential at all levels of physical fitness.</p>";

title[13] = "Custom-made Orthotic";
description[13] = "<p>From head to toe and everything in between is what make up our body. It is a linked system.  Wearing properly supportive insoles can improve alignment; treat foot and ankle pain and prevent injury. Use of good foot orthotics can reduce pain, increase performance, counteract alignment, prevent injury, improve posture and balance.</p><p>If you have foot pain, proper set of insoles can provide the mechanics to help common issues such as plantar fascitis, matatarsalgia, stress fracture, hamstring strains, Achilles tendonitis, and patellofemoral pain syndrome</p>";

title[14] = "Computerized Spinal Screening";
description[14] = "";

function buttonAllOff() {
  $('#button-01').attr('src', 'images/p2/04-p2-button-01-off-en.png');
  $('#button-02').attr('src', 'images/p2/04-p2-button-02-off-en.png');
  $('#button-03').attr('src', 'images/p2/04-p2-button-03-off-en.png');
  $('#button-04').attr('src', 'images/p2/04-p2-button-04-off-en.png');
  $('#button-05').attr('src', 'images/p2/04-p2-button-05-off-en.png');
  $('#button-06').attr('src', 'images/p2/04-p2-button-06-off-en.png');
  $('#button-07').attr('src', 'images/p2/04-p2-button-07-off-en.png');
  $('#button-08').attr('src', 'images/p2/04-p2-button-08-off-en.png');
  $('#button-09').attr('src', 'images/p2/04-p2-button-09-off-en.png');
  $('#button-10').attr('src', 'images/p2/04-p2-button-10-off-en.png');
  $('#button-11').attr('src', 'images/p2/04-p2-button-11-off-en.png');
  $('#button-12').attr('src', 'images/p2/04-p2-button-12-off-en.png');
  $('#button-13').attr('src', 'images/p2/04-p2-button-13-off-en.png');
  $('#button-14').attr('src', 'images/p2/04-p2-button-14-off-en.png');
}

$(document).ready(function() {
  $('#button-01').mouseover(function(){
    buttonAllOff();
    $(this).attr('src', 'images/p2/04-p2-button-01-on-en.png');
    $('#title').html(title[1]);
    $('#description').html(description[1]);
  })
  $('#button-02').mouseover(function(){
    buttonAllOff();
    $(this).attr('src', 'images/p2/04-p2-button-02-on-en.png');
    $('#title').html(title[2]);
    $('#description').html(description[2]);
  })
  $('#button-03').mouseover(function(){
    buttonAllOff();
    $(this).attr('src', 'images/p2/04-p2-button-03-on-en.png');
    $('#title').html(title[3]);
    $('#description').html(description[3]);
  })
  $('#button-04').mouseover(function(){
    buttonAllOff();
    $(this).attr('src', 'images/p2/04-p2-button-04-on-en.png');
    $('#title').html(title[4]);
    $('#description').html(description[4]);
  })
  $('#button-05').mouseover(function(){
    buttonAllOff();
    $(this).attr('src', 'images/p2/04-p2-button-05-on-en.png');
    $('#title').html(title[5]);
    $('#description').html(description[5]);
  })
  $('#button-06').mouseover(function(){
    buttonAllOff();
    $(this).attr('src', 'images/p2/04-p2-button-06-on-en.png');
    $('#title').html(title[6]);
    $('#description').html(description[6]);
  })
  $('#button-07').mouseover(function(){
    buttonAllOff();
    $(this).attr('src', 'images/p2/04-p2-button-07-on-en.png');
    $('#title').html(title[7]);
    $('#description').html(description[7]);
  })
  $('#button-08').mouseover(function(){
    buttonAllOff();
    $(this).attr('src', 'images/p2/04-p2-button-08-on-en.png');
    $('#title').html(title[8]);
    $('#description').html(description[8]);
  })
  $('#button-09').mouseover(function(){
    buttonAllOff();
    $(this).attr('src', 'images/p2/04-p2-button-09-on-en.png');
    $('#title').html(title[9]);
    $('#description').html(description[9]);
  })
  $('#button-10').mouseover(function(){
    buttonAllOff();
    $(this).attr('src', 'images/p2/04-p2-button-10-on-en.png');
    $('#title').html(title[10]);
    $('#description').html(description[10]);
  })
  $('#button-11').mouseover(function(){
    buttonAllOff();
    $(this).attr('src', 'images/p2/04-p2-button-11-on-en.png');
    $('#title').html(title[11]);
    $('#description').html(description[11]);
  })
  $('#button-12').mouseover(function(){
    buttonAllOff();
    $(this).attr('src', 'images/p2/04-p2-button-12-on-en.png');
    $('#title').html(title[12]);
    $('#description').html(description[12]);
  })
  $('#button-13').mouseover(function(){
    buttonAllOff();
    $(this).attr('src', 'images/p2/04-p2-button-13-on-en.png');
    $('#title').html(title[13]);
    $('#description').html(description[13]);
  })
  $('#button-14').mouseover(function(){
    buttonAllOff();
    $(this).attr('src', 'images/p2/04-p2-button-14-on-en.png');
    $('#title').html(title[14]);
    $('#description').html(description[14]);
  })
});