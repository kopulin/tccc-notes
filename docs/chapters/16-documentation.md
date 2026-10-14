---
title: 文件記錄
description: 指引戰術醫療環境下的文件記錄規範，包含 MIST 報告格式、9-Line 救護後送呼叫以及美軍 DD1380 戰術傷票欄位。
order: 16
category: 檢傷與文件
status: published
tags: [MIST格式, 9-Line, DD1380傷票, 傷情記錄, 戰術通訊]
---

# 文件記錄

### 16.1 文件記錄

**大原則**
- 沒有傷票就寫在傷患身上
- 允許時用手機錄音，事後補填文件（現場速度優先）
- DD1380 同時是文件紀錄也是操作指引

#### MIST 格式

<table>
  <colgroup>
    <col style="width: 50%" />
    <col style="width: 50%" />
  </colgroup>
  <thead>
    <tr><th>字母</th><th>內容</th></tr>
  </thead>
  <tbody>
    <tr><td>M</td><td>Mechanism（受傷機轉）＋受傷時間（如果知道）</td></tr>
    <tr><td>I</td><td>Injury or illness（傷情或疾病）</td></tr>
    <tr><td>S</td><td>Symptoms and vital signs（症狀與生命徵象）</td></tr>
    <tr><td>T</td><td>Treatment（已給予的處置）</td></tr>
  </tbody>
</table>

#### 9-Line

- 呼叫載具支援後撤的通用格式
- 台灣對接單位不一定熟悉此格式，優先使用 MIST
- 全程注意無線電通訊保密（COMSEC），能不直接講的資訊就不講
- Line 1–5 在載具出發前必須回報；Line 6–9 可在載具出發後途中補報

<table>
  <colgroup>
    <col style="width: 20%" />
    <col style="width: 30%" />
    <col style="width: 50%" />
  </colgroup>
  <thead>
    <tr><th>Line</th><th>內容</th><th>代碼與說明</th></tr>
  </thead>
  <tbody>
    <tr><td>Line 1</td><td>地點位置（座標）</td><td>不是當下位置，而是<strong>傷患後送交接的位置</strong>；注意無線電通訊保密</td></tr>
    <tr><td>Line 2</td><td>無線電頻率、呼號</td><td>考量通訊保密，可以的話不要直接講頻率</td></tr>
    <tr><td>Line 3</td><td>傷患人數與優先序</td><td>A：Urgent Casualties<br>B：Urgent Surgical Casualties<br>C：Priority Casualties<br>D：Routine Casualties<br>E：Convenience Casualties<br>時限：Urgent／Urgent Surgical（需外科手術）1 小時內、Priority 4 小時內、Routine 24 小時內、Convenience 非醫療必要，僅為方便後送<br>呼叫方式：代碼＋人數，例如「Alfa Two, Break, Charlie Four, Over」</td></tr>
    <tr><td>Line 4</td><td>特殊裝備</td><td>A：None（不需要特殊裝備）<br>B：Hoist（吊掛絞車；直升機無法落地時，以絞車將傷患吊上機）<br>C：Extraction Equipment（破拆脫困裝備；傷患受困於車輛、建物殘骸等，需要破壞工具才能救出）<br>D：Ventilator（呼吸器；傷患需要機械通氣，例如已建立進階呼吸道）<br>其他特殊需求（例如血品、特殊處置）也在 Line 4 一併說明</td></tr>
    <tr><td>Line 5</td><td>傷患狀態</td><td>L：Litter Patients（擔架傷患人數）<br>A：Ambulatory Patients（可自行行走傷患人數）<br>兩種都有時，中間用 Break 分開</td></tr>
    <tr><td>Line 6</td><td>後送地點安全狀況</td><td>N：沒有敵情<br>P：可能有敵人<br>E：有敵人，接近時需要注意<br>X：有敵人，需要武裝護衛</td></tr>
    <tr><td>Line 7</td><td>後送點識別</td><td>A：布板<br>B：信號彈（照明彈、信號槍等煙火類）<br>C：煙霧信號（發煙罐、煙霧彈）<br>D：無<br>E：其他<br>顏色等細節不在此處說，與後送隊伍取得聯繫後再律定：由載具先報出看到的顏色，地面再確認（防止敵人冒用；現場也可能有多組同時後送，信號顏色可能相同）</td></tr>
    <tr><td>Line 8</td><td>傷患身份</td><td>A：本國軍人<br>B：本國平民<br>C：外國軍人<br>D：外國平民<br>E：戰俘</td></tr>
    <tr><td>Line 9</td><td>NBC 環境</td><td>N：核子（Nuclear）<br>B：生物武器（Biological）<br>C：化學武器（Chemical）<br>地貌、地形描述屬平時版內容，部分單位戰時也會一併回報</td></tr>
  </tbody>
</table>

> 上表為戰時版。平時版 Line 6 改報傷病數量與類型（傷病類型、有無嚴重出血、已知血型），Line 9 改報後送點地形描述。

**呼叫要點**
- 每一項都先清楚講出 Line 編號，例如「Line 1……, Line 2……」
- 9-Line 報完後，**每一位傷患**再各報一份 MIST
- 字母、數字依無線電通話規範發音（見下方北約音標字母表）
- 一段通話以「Over」結尾，表示換對方講
- 講完後無線電保持開機守聽，等後送單位的進一步指示或聯繫

#### 北約音標字母（NATO Phonetic Alphabet）

<table>
  <colgroup>
    <col style="width: 15%" />
    <col style="width: 35%" />
    <col style="width: 15%" />
    <col style="width: 35%" />
  </colgroup>
  <thead>
    <tr><th>字母</th><th>呼號</th><th>字母</th><th>呼號</th></tr>
  </thead>
  <tbody>
    <tr><td>A</td><td>Alfa</td><td>N</td><td>November</td></tr>
    <tr><td>B</td><td>Bravo</td><td>O</td><td>Oscar</td></tr>
    <tr><td>C</td><td>Charlie</td><td>P</td><td>Papa</td></tr>
    <tr><td>D</td><td>Delta</td><td>Q</td><td>Quebec</td></tr>
    <tr><td>E</td><td>Echo</td><td>R</td><td>Romeo</td></tr>
    <tr><td>F</td><td>Foxtrot</td><td>S</td><td>Sierra</td></tr>
    <tr><td>G</td><td>Golf</td><td>T</td><td>Tango</td></tr>
    <tr><td>H</td><td>Hotel</td><td>U</td><td>Uniform</td></tr>
    <tr><td>I</td><td>India</td><td>V</td><td>Victor</td></tr>
    <tr><td>J</td><td>Juliett</td><td>W</td><td>Whiskey</td></tr>
    <tr><td>K</td><td>Kilo</td><td>X</td><td>X-ray</td></tr>
    <tr><td>L</td><td>Lima</td><td>Y</td><td>Yankee</td></tr>
    <tr><td>M</td><td>Mike</td><td>Z</td><td>Zulu</td></tr>
  </tbody>
</table>

> 官方拼法為 Alfa、Juliett（非 Alpha、Juliet），避免非英語系使用者念錯。

**數字發音**

<table>
  <colgroup>
    <col style="width: 15%" />
    <col style="width: 35%" />
    <col style="width: 15%" />
    <col style="width: 35%" />
  </colgroup>
  <thead>
    <tr><th>數字</th><th>念法</th><th>數字</th><th>念法</th></tr>
  </thead>
  <tbody>
    <tr><td>0</td><td>Zero</td><td>5</td><td>Five（Fife）</td></tr>
    <tr><td>1</td><td>One（Wun）</td><td>6</td><td>Six</td></tr>
    <tr><td>2</td><td>Two（Too）</td><td>7</td><td>Seven</td></tr>
    <tr><td>3</td><td>Three（Tree）</td><td>8</td><td>Eight（Ait）</td></tr>
    <tr><td>4</td><td>Four（Fow-er）</td><td>9</td><td>Niner</td></tr>
  </tbody>
</table>

- 9 念 Niner，避免與德語 nein（no）混淆
- 數字逐位念，例如座標 1234 念「One Two Three Four」，不念「twelve thirty-four」
- 小數點念 Decimal

#### DD1380 傷票

> **[draft]** 完整欄位說明待補充

**戰鬥代碼（Battle Roster #）撰寫方式**

<table>
  <colgroup>
    <col style="width: 50%" />
    <col style="width: 50%" />
  </colgroup>
  <thead>
    <tr><th>寫法</th><th>範例（Lin, Da Ming / C123456789）</th></tr>
  </thead>
  <tbody>
    <tr><td>英文姓名縮寫兩碼 ＋ 身分證字號後四碼</td><td>LD6789</td></tr>
    <tr><td>直接寫身分證字號</td><td>C123456789</td></tr>
  </tbody>
</table>

![DD1380 正面](/images/dd1380-form-p1.png)

![DD1380 背面](/images/dd1380-form-p2.png)
